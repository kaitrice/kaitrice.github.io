import * as motion from "motion/react-client";
import './Logo.css';

const draw = {
    hidden: (i) => ({
        pathLength: 0,
        opacity: 0,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
    }),
    visible: (i) => {
        const delay = i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
                x: { delay, type: "spring", duration: 1 },
                y: { delay, type: "spring", duration: 1 },
            },
        };
    },
};

export default function AnimateLogo1() {
    return (
        <motion.svg
            viewBox="0 0 512 512"
            initial="hidden"
            animate="visible"
            className="logo"
        >
            <motion.g clipPath="url(#clip0_65_1007)">
                <motion.g clipPath="url(#clip1_65_1007)">
                    <motion.path
                        d="M214.17 184.549H324.601V468.993H214.17V184.549Z"
                        fill="#FFDCE3"
                        variants={draw}
                        custom={1}
                    />
                    <motion.path
                        d="M0 44H110.431V328.444H0V44Z"
                        fill="#FAF5E0"
                        variants={draw}
                        custom={4}
                    />
                    <motion.path
                        d="M361.412 342.831C361.412 342.831 441.08 334.556 477.947 365.597C517.729 399.09 511.669 468.993 511.669 468.993H361.412V342.831Z"
                        fill="#FFDCE3"
                        variants={draw}
                        custom={2}
                    />
                    <motion.path
                        d="M361.412 188.16C361.412 188.16 440.246 172.51 477.368 206.371C516.454 242.023 512.74 288.123 477.368 337.126C442 386.13 361.412 363.282 361.412 363.282V188.16Z"
                        fill="#FFDCE3"
                        variants={draw}
                        custom={3}
                    />
                    <motion.path
                        d="M170.253 206.987C200.933 179.465 223.945 174.766 258.087 206.987C294.924 241.753 291.495 276.035 258.087 306.006C227.407 333.528 204.395 338.227 170.253 306.006C133.416 271.24 136.845 236.958 170.253 206.987Z"
                        fill="#FAF5E0"
                        variants={draw}
                        custom={5}
                    />
                    <motion.path
                        d="M168.194 67.1414C202.654 34.3219 229.878 38.315 260.146 67.1414C290.414 95.9677 294.607 121.895 260.146 154.715C225.686 187.534 198.462 183.541 168.194 154.715C137.926 125.889 133.733 99.961 168.194 67.1414Z"
                        fill="#FAF5E0"
                        variants={draw}
                        custom={6}
                    />
                </motion.g>
            </motion.g>
            <defs>
                <clipPath id="clip0_65_1007">
                    <rect width="512" height="512" fill="white" />
                </clipPath>
                <clipPath id="clip1_65_1007">
                    <rect width="512" height="424.993" fill="white" transform="translate(0 44)" />
                </clipPath>
            </defs>
        </motion.svg>
    );
}
