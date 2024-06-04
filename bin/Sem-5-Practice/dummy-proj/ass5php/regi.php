<?php
include ("dbconfig.php");
if(isset($_POST['btnsub'])) {
  $query="INSERT INTO userprofile (userName, password, emailAddress, mobileNo, userImg) VALUES ('".$_POST['user_name']."','".$_POST['password']."','".$_POST['email']."','".$_POST['mobile_number']."','upload/".$_FILES['user_image']['name']."')";
  mysqli_query($connect, $query) or die("Error in insert Query");
  echo "Query Executed successfully";
  $userImg=$_FILES['user_image'];
  if(move_uploaded_file($userImg['tmp_name'],"upload/".$_FILES['user_image']['name'])) {
      echo "file uploaded successfully";
  } else {
      echo " failed to upload file";
  }
  header("Location: showprofile.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Profile</title>
  <style>
    input {
      margin:5px;
    }
    button {
      margin-left:3%;
    }
  </style>
</head>
<body style="font-family:sans-serif">
  <h1>Create User Profile</h1>
  <form method="post" style="padding-left:40px;" id="userProfileForm" enctype="multipart/form-data">
    <label for="user_name">User Name:</label><br/>
    <input type="text" id="user_name" name="user_name" required />    <br>
    <br/>
    <label for="password">Password:</label><br/>
    <input type="password" id="password" name="password" required /><br>
    <br/>
    <label for="email">Email Address:</label><br/>
    <input type="email" id="email" name="email" required><br>
    <br/>
    <label for="mobile_number">Mobile Number:</label><br/>
    <input type="text" id="mobile_number" name="mobile_number" /><br>
    <br/>
    <label for="user_image">User Image:</label><br/>
    <input type="file" id="user_image" name="user_image" accept=".jpg, .jpeg, .png" max="2097152" required /><br>
    <br/>
    <button type="submit" name="btnsub" onclick="validUser()">Create Profile</button>
  </form>
  <script>
    var validUser = function() {
      const username = document.getElementById('user_name').value;
      const usernameRegex = /^[a-zA-Z0-9_\s]{4,20}$/; 

      const email = document.getElementById('email').value;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

      const password = document.getElementById('password').value;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

      const phoneNumber = document.getElementById('mobile_number').value;
      const phoneNumberRegex = /^[+]?[0-9]{10,}$/;
      
        if(username.match(usernameRegex)) {
          return true;
        } else {
          alert("User Name Should have more than 4 Characters");
          return false;
        }  
       
        if(email.match(emailRegex)) {user_image
            return true;
        } else {
            alert(" Please Enter a valid Email Address");
            return false;
        }

        if(password.match(passwordRegex)) {
        return true;
        } else {
            alert(" Requires at least 8 characters, one uppercase, one lowercase, one digit, and one special character");
            return false;
        }

        if(phoneNumber.match(phoneNumberRegex)) {
        return true;
        } else {
            alert(" Enter Valid Phone Number");
            return false;
        }
    }
  </script>
</body>
</html>