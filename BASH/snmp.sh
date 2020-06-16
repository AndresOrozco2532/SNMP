#!/bin/bash

MAQUINA=$(snmpget -v 2c -c $1 $2 sysName.0 | awk '{split($0,a," "); print a[4]}')
TIEMPO=$(snmpget -v 2c -c $1 $2 sysUpTime.0 | awk '{split($0,a,"("); print a[2]}' | awk '{split($0,a,")"); print a[1]}')

TCP_IN=$(snmpget -v 2c -c $1 $2 tcpInSegs.0 | awk '{split($0,a," "); print a[4]}')
TCP_OUT=$(snmpget -v 2c -c $1 $2 tcpOutSegs.0 | awk '{split($0,a," "); print a[4]}')
UDP_IN=$(snmpget -v 2c -c $1 $2 udpInDatagrams.0 | awk '{split($0,a," "); print a[4]}')
UDP_OUT=$(snmpget -v 2c -c $1 $2 udpOutDatagrams.0 | awk '{split($0,a," "); print a[4]}')

FECHA=$(date +'%Y/%m/%d %H:%M:%S')

FICHERO=$PWD/data.json

if [ ! -f "$FICHERO" ]; then
    echo "{\"Datos\": []}" >> data.json 
fi

REGISTROS=$(cat data.json)

echo $REGISTROS | jq \
    --arg maquina "$MAQUINA"  \
    --arg tiempo "$TIEMPO" \
    --arg tcpInSegs "$TCP_IN" \
    --arg tcpOutSegs "$TCP_OUT" \
    --arg udpInSegs "$UDP_IN" \
    --arg udpOutSegs "$UDP_OUT" \
    --arg fecha "$FECHA" '.Datos += [{ "Maquina": $maquina, "Fecha": $fecha,"tcpInSegs": $tcpInSegs, "tcpOutSegs": $tcpOutSegs, "udpInSegs": $udpInSegs, "udpOutSegs": $udpOutSegs, "upTime": $tiempo }]' > data.json
