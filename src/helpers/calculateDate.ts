export const calculateTimeElapsed = (timestamp :any) => {
    const currentTime = new Date();
    const pastTime = new Date(timestamp);

    // Calculate the difference in milliseconds
    const difference = currentTime.getTime() - pastTime.getTime();

    // Convert milliseconds to seconds
    const seconds = Math.floor(difference / 1000);

    // Calculate minutes, hours, and days
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
};