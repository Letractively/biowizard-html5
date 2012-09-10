<?
    $n = strtolower($_GET['nome']);
	$f=($_GET['fields']);
	$o =($_GET['organism']);
	$cd=($_GET['checkData']);
	$sMin=($_GET['sMin']);
	$sMax=($_GET['sMax']);
	sleep(2);
    echo("Founded ".rand()." for $n , $f , $o , $sMin , $sMax, $cd");

?>