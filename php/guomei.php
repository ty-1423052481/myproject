<?php

include "conn.php";


$sql="INSERT day VALUES(null,'https://gfs17.gomein.net.cn/T1QCKyBvYv1RCvBVdK_160.jpg','29.8','29.9','卉百福 东北大米10斤珍珠米粳米'),
(null,'https://gfs17.gomein.net.cn/T1_vxXBghv1RCvBVdK_160.jpg','179','180','象印(ZO JIRUSHI)保温壶 SH-HA15C304不锈钢真空保温壶家用双层保温壶咖啡保温壶 暖水壶热水壶1.5L(红橙色 1.5L)'),
(null,'https://gfs17.gomein.net.cn/T1jcbjBjCT1RCvBVdK_160.jpg','490','529','家卫士（JWS）YBS160i 扫地机器人 大尘盒吸尘器'),
(null,'https://gfs17.gomein.net.cn/T1PpEvBQET1RCvBVdK_160.jpg','129','139','飞利浦（PHILIPS）HP8230 电吹风机 大功率快速干发 恒温护发')

";

// $conn->query($sql);

$result = $conn->query("SELECT * FROM day");
$arr = array();
for($i = 0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}
echo json_encode($arr);