import React, { useEffect, useState } from "react";

const TARGET_DATE = new Date("2025-06-06T21:58:20");

function Count() {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = TARGET_DATE - now;
        if(difference <=0)
            return null;
        return{
            days:Math.floor(difference/(1000*60*60*24)),
            hours: Math.floor(difference/(1000*60*60)%24),
            minutes: Math.floor(difference/((1000*60))%60),
            seconds: Math.floor(difference/((1000))%60),
            difference: difference
        }
    }

    const [timeLeft,setTimeLeft] = useState(calculateTimeLeft());
    useEffect(()=>{
        const timer = setInterval(()=>{
            const updatedTimer = calculateTimeLeft();
            setTimeLeft(updatedTimer);
        },1000);
        return () => clearInterval(timer);
    },[]);
    if(!timeLeft){
        return(
            <div style={styles.container}>
                <h1 style={{ color: '#ffffff', fontSize: 80, textAlign: 'center', fontFamily: "Georgia, serif" }}>Happy Birthday!!!</h1>
            </div>
        )
    }
    else if((timeLeft.difference/1000)<=5){
        return(
            <div style={styles.container}>
                <h1 style={{ color: '#ffffff', fontSize: 80, marginTop: 100 }}>{timeLeft.seconds}</h1>
            </div>
        )
    }
    return(
        <div style={styles.container}>
            <h1 style={{ fontFamily: "Georgia, serif", color: "#ffffff", marginTop: 40 }}>Count Down to Your Birthday!!!!</h1>
            <div style={styles.timer}>
                <TimeBox label="Days" value={timeLeft.days} />
                <TimeBox label="Hours" value={timeLeft.hours} />
                <TimeBox label="Minutes" value={timeLeft.minutes} />
                <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
        </div>
    )
}

const TimeBox = ({label,value}) => (
    <div style={styles.timeBox}>
        <span style={styles.timeValue}>{value.toString().padStart(2,"0")}</span>
        <span style={styles.timeLabel}>{label.toString().padStart(2,"0")}</span>
    </div>
)

const styles = {
    timeBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        padding: 20,
        width: 100,
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        color: "#3d3d3d",
        height: 100
    },
    timeLabel: {
        fontSize: 16,
        marginTop: 5,
        fontWeight: "bold",
        color: " #ee9ca7"
    },
    timeValue: {
        fontSize: 36,
        fontWeight: "bold"
    },
    timer: {
        display: 'flex',
        justifyContent: "center",
        gap: 40,
        marginTop: 100
    },
    container: {
        textAlign: "center",
        backgroundColor: " rgba(241, 178, 205, 0.54)",
        color: "#ffffff",
        height: "100vh",
        paddingTop: 60
    }
}

export default Count;
