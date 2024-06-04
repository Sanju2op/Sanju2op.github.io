<?php
include("dbconfig.php");
$result=mysqli_query($connect, "SELECT * FROM userprofile");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User List</title>
    <style>
        table {
          border-collapse: collapse;
          width: 100%; 
          max-width:900px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          border:solid;
        }
        th, td, h1 {
            padding:7px;
            border:solid black;
            vertical-align:middle;
            text-align:center;
        }

    </style>
</head>
<body  style="font-family:sans-serif">
    <h1 style="margin-left:94px;max-width:900px;">User Recoards</h1>
    <table>
   
        <?php if(mysqli_num_rows($result)>0) { ?>
        <tr>
            <th>User Id</th>
            <th>User Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Password</th>
        </tr>
        <?php while($data=mysqli_fetch_array($result)) { ?>  
        <tr>
            <td><?php echo$data['userId'] ?></td>
            <td><img style="width:50px;" src="<?php echo$data['userImg'] ?>" /></td>
            <td><?php echo$data['userName'] ?></td>
            <td><?php echo$data['emailAddress'] ?></td>
            <td><?php echo$data['mobileNo'] ?></td>
            <td><?php echo$data['password'] ?></td>
        </tr>
            <?php }} else { ?>
        <tr>
            <td>NO records found</td>
        </tr>
        <?php } ?>
    </table>
    <br/>
<button style="padding:10px; margin-left:100px;" type="button" onclick="document.location='regi.php'">Add New Record</button>
</body>
</html> 