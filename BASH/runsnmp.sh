#!/bin/bash

while true
do
 sh snmp.sh $2 $3  
 echo "Ejecutandose cada: "  $1 " segundos"
 sleep $1
done
