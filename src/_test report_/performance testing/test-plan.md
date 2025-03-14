# Performance Test Report

## Overview

This report summarizes the performance test results for the **Savanna PhotoApp**, conducted using **JMeter**. The tests were performed to assess the application's responsiveness, stability, and overall efficiency under load.

## Performance Metrics

| **Metric**                         | **Value/Result** | **Notes**                                                    |
| ---------------------------------- | ---------------- | ------------------------------------------------------------ |
| **Response Time (Avg.)**           | 1.8 seconds      | Average time for the server to respond to a request.         |
| **Error Rate**                     | 0.8%             | 0.8% of requests failed during the load test.                |
| **Latency (Avg.)**                 | 0.3 seconds      | Delay before the server starts processing the request.       |
| **FCP (First Contentful Paint)**   | 1.2 seconds      | Time taken for the first element to appear on the page.      |
| **LCP (Largest Contentful Paint)** | 3.0 seconds      | Time taken for the largest element to load.                  |
| **TTI (Time to Interactive)**      | 2.6 seconds      | Time taken to fully interact with the page.                  |
| **Time to First Byte (TTFB)**      | 0.8 seconds      | Latency from the request to the first byte of data received. |

## Summary

The performance test results indicate that the App is performing within acceptable limits. While the average response time is 1.8** seconds**, optimizing backend queries and reducing latency could further improve the user experience.

### Recommendations

- Optimize database queries to reduce response times.
- Implement caching mechanisms to improve load performance.
- Minimize render-blocking resources for better FCP and LCP times.
- Monitor and optimize server performance to lower latency and TTFB.

---

\*Test conducted using \**[JMeter](https://jmeter.apache.org/)*
