// import { playAudit } from 'playwright-lighthouse';
// import { test, chromium } from '@playwright/test';
// import lighthouseDesktopConfig from 'lighthouse/lighthouse-core/config/lr-desktop-config';
// import { thresholds } from '../data/thresholdData';
// import { URLs } from "../resources/urls.json";

// const options = {
//     loglevel: "info",
// }

// URLs.forEach(url => {
//     test(`Ligthouse performance test for ${url}`, async () => {
//         const browser = await chromium.launch({
//             args: ['--remote-debugging-port=9222'],
//             headless: true
//         });
//         const page = await browser.newPage();
//         await page.goto(url);
//         await playAudit({
//             page: page,
//             config: lighthouseDesktopConfig,
//             thresholds: thresholds,
//             port: 9222,
//             opts: options,
//             reports: {
//                 formats: {
//                     html: true, //defaults to false
//                 },
//                 name: `ligthouse-${new Date().toISOString()}`, //defaults to `lighthouse-${new Date().getTime()}`
//                 directory: `${process.cwd()}/lighthouse`, //defaults to `${process.cwd()}/lighthouse`
//             },
//         });
//         await page.close();
//         await browser.close();
//     })
// });