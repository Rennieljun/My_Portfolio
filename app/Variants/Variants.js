import { easeInOut } from "framer-motion"

export const slideleft = {
    start: {
        opacity: 0,
        x: -100,
        scale: 0,
        skewY: 0,
        boxShadow: "-5px -5px 5px black"
    },
    show: {
        opacity: 0.5,
        transition: {
            duration: 1,
            ease:  "easeOut"
        },
        x: 0,
        scale: 1,
        skewY: -10,
        boxShadow: "-20px -20px 5px black"        
    },
    hover: {
        opacity: 1,
        scale: 1.2,
        skewY: 0,
        boxShadow: "0px 0px 5px black" ,
        }
}

export const prev = {
    initial: {
        borderRadius: "100%",
        opacity: 0,
    },
    hover: {
        opacity: 1,
        borderRadius: "100%",
    },
    textHover: {
        scale: 1.5,
    }
}

export const title = {
    initial: {
        scale: 0,
        opacity: 0,

    },
    show: {
        transition: {
            duration: 1, ease: "easeIn"
        },
        scale: 2,
        opacity: 1,
    }
}

export const projdes ={ 
    initial: {
        opacity: 0,
        scale: 0.3
    },

    show: {
        transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.5
        },
        opacity: 1, 
        scale: 1
    },
    
    des: {
        opacity: 0,
        y: 50,
    },

    desShow: {
        transition: {
            duration: 1, 
            ease: "easeIn",
            delay: 0.5
        },
        opacity: 1,
        y: 0
    }
}

export const blinking = {
    blink: {
        opacity: [0.2, 0.5],
        transition: {
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity
        }
    }
}