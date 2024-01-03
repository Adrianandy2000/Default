<!DOCTYPE html>
<html>
<head>
  <meta charset="iso-8859-2">
  <meta http-equiv="Content-Language" content="pl" />
  <script language="php">
</head>
<body>
<php
function findIt(array $seq) : int

{

    $nums = array_count_values($seq);

    foreach ($nums as $key => $val) {

      if ($val % 2) {

        return $key;

      }

    }

}
?>
</body>
</html>