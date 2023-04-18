<?php
header('Content-type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = "contact@dkp-consult.be";
  $name = htmlspecialchars(trim($_POST['name']));
  $email = htmlspecialchars(trim($_POST['email']));
  $subject = htmlspecialchars(trim($_POST['subject']));
  $message = htmlspecialchars(trim($_POST['message']));
  
  // validation de l'adresse email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(array('success' => false, 'message' => 'L\'adresse email n\'est pas valide'));
    exit;
  }
  
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $name <$email>" . "\r\n";
  $headers .= "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $message_body = "
    <html>
    <head>
      <title>$subject</title>
    </head>
    <body>
      <p>Nom : $name</p>
      <p>Email : $email</p>
      <p>Message : $message</p>
    </body>
    </html>
  ";

  // Envoi de l'email
  if (mail($to, $subject, $message_body, $headers)) {
    // envoi de l'accusé de réception à l'utilisateur
    
    $user_subject = "Accusé de réception : $subject";
    $user_message_body = "Bonjour $name,<br><br>Nous avons bien reçu votre message. Nous vous recontacterons dans les plus brefs délais.<br><br>Cordialement,<br>L'équipe de votre entreprise.";
    mail($email, $user_subject, $user_message_body, $headers);
    
    echo json_encode(array('success' => true, 'message' => 'Message envoyé avec succès'));
  } else {
    echo json_encode(array('success' => false, 'message' => 'Une erreur est survenue. Veuillez réessayer plus tard.'));
  }
}
?>
