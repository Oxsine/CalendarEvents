import osUtils, { cpuUsage, freememPercentage } from 'os-utils';

const POLLING_INTERVAL = 500;

export function pollResources() {
    setInterval( async () => {
        const cpuUsage = await getCpuUsage();
        const ramUsage = getRamUsage();
        console.log({cpuUsage, ramUsage});
    }, POLLING_INTERVAL);
}

function getCpuUsage() {
    return new Promise(resolve => {
        cpuUsage(resolve);
    })
}

function getRamUsage() {
    return 1 - freememPercentage();
}