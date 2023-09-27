export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let firstBall = jumpAmount;

    for (; firstBall < breaks.length; firstBall += jumpAmount) {
        if (breaks[firstBall]) {
            break;
        }
    }

    firstBall = firstBall - Math.floor(Math.sqrt(breaks.length));

    for (
        let secondBall = 0;
        secondBall < jumpAmount && firstBall < breaks.length;
        secondBall++, firstBall++
    ) {
        if (breaks[firstBall]) {
            return firstBall;
        }
    }
    return -1;
}