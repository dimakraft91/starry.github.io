<?php 

	$result = mail("Galeaf533208@yandex.ru","Ремонт Iphone","Клиент хочет сделать ремонт\nИмя: $_POST[name] \nКонтактный телефон: $_POST[phone]");

	 if ($result) {
	 	header('location: thank-you.html');
	 }

	 else {
	 echo "<p>Сообщение не отправленно!</p>";
	 }

	 


 ?>