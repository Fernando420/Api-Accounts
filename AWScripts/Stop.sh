if [ -n "$STAGING_MODE" ] ; then
    if lsof -Pi :4005 -sTCP:LISTEN -t >/dev/null ; then
        kill -9 $(lsof -i :4005 -t)
    else
        echo "not running"
    fi
else
    if lsof -Pi :4008 -sTCP:LISTEN -t >/dev/null ; then
        kill -9 $(lsof -i :4008 -t)
    else
        echo "not running"
    fi
fi

rm -rf /home/ubuntu/ms-stp