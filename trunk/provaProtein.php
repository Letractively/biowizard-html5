<?
    $n = strtolower($_GET['nome']);
	$f=($_GET['fields']);
	$cs=($_GET['checkSearch']);
	$cd=($_GET['checkData']);
	$sMin=($_GET['sMin']);
	$sMax=($_GET['sMax']);
	sleep(2);
    echo("Founded ".rand()." for $n , $f , $sMin , $sMax, $cs, $cd");

?>