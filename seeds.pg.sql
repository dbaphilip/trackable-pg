INSERT INTO "issues" ("title", "description", "status", "created_at", "updated_at") VALUES
(
  'Login page fails on Safari',
  'Users report that the login page intermittently fails to submit credentials when accessed via Safari browsers. The issue appears related to client-side validation scripts not executing consistently, resulting in no error feedback and a stalled login experience.',
  'OPEN',
  '2025-01-02 09:15:00',
  '2025-01-02 09:15:00'
),
(
  'Database connection pool exhaustion',
  'During peak traffic hours, the application occasionally exhausts the available database connections, causing requests to queue and eventually time out. This issue impacts overall system responsiveness and may require configuration tuning or query optimization.',
  'WIP',
  '2025-01-03 10:40:00',
  '2025-01-04 14:20:00'
),
(
  'Incorrect password reset email content',
  'Password reset emails are being sent with outdated branding and missing instructions, leading to user confusion. Although the reset link functions correctly, the surrounding content does not match current UX guidelines.',
  'CLOSED',
  '2025-01-04 08:30:00',
  '2025-01-05 11:00:00'
),
(
  'Slow dashboard load times',
  'The analytics dashboard experiences noticeable delays when loading large datasets, especially for users with extensive historical data. Initial analysis suggests inefficient queries and lack of proper indexing.',
  'WIP',
  '2025-01-06 13:10:00',
  '2025-01-07 09:45:00'
),
(
  'Mobile menu overlaps content',
  'On smaller screen sizes, the mobile navigation menu overlaps the main content area, making text unreadable and buttons inaccessible. This appears to be caused by missing responsive layout constraints.',
  'OPEN',
  '2025-01-07 16:25:00',
  '2025-01-07 16:25:00'
),
(
  'Audit logs missing user identifiers',
  'Certain audit log entries are missing associated user identifiers, making it difficult to trace actions back to specific accounts. This reduces the effectiveness of security reviews and compliance audits.',
  'WIP',
  '2025-01-08 09:00:00',
  '2025-01-09 10:30:00'
),
(
  'Email notifications delayed',
  'System-generated email notifications are occasionally delayed by several minutes due to background job queue congestion. While emails are eventually delivered, the delay affects time-sensitive alerts.',
  'OPEN',
  '2025-01-09 14:50:00',
  '2025-01-09 14:50:00'
),
(
  'Exported CSV files have incorrect headers',
  'CSV exports generated from the reporting module contain mislabeled column headers, which do not match the data values beneath them. This causes confusion for users importing the data into external tools.',
  'CLOSED',
  '2025-01-10 11:20:00',
  '2025-01-11 08:10:00'
),
(
  'User profile images not updating',
  'When users upload a new profile image, the change is not immediately reflected across the application. Cached image URLs appear to persist longer than expected, requiring a hard refresh to update.',
  'WIP',
  '2025-01-11 15:35:00',
  '2025-01-12 10:00:00'
),
(
  'Search results ignore filters',
  'Applying multiple filters in the search interface does not consistently narrow the result set. Some filters appear to be ignored due to incorrect query parameter handling on the backend.',
  'OPEN',
  '2025-01-12 12:45:00',
  '2025-01-12 12:45:00'
),
(
  'Session timeout not enforced',
  'User sessions remain active beyond the configured timeout period, posing a potential security risk. Investigation suggests that token expiration is not being validated on every request.',
  'WIP',
  '2025-01-13 09:30:00',
  '2025-01-14 11:15:00'
),
(
  'Broken link in footer',
  'The footer contains a link to the privacy policy that returns a 404 error. The destination URL appears to be outdated following a recent content restructuring.',
  'CLOSED',
  '2025-01-14 10:10:00',
  '2025-01-14 16:40:00'
),
(
  'API returns inconsistent error codes',
  'Certain API endpoints return different HTTP error codes for the same failure scenarios, making it difficult for clients to implement consistent error handling logic.',
  'OPEN',
  '2025-01-15 08:55:00',
  '2025-01-15 08:55:00'
),
(
  'Pagination breaks on last page',
  'Navigating to the final page of paginated results sometimes produces an empty list despite data being available. This is likely due to an off-by-one error in offset calculations.',
  'WIP',
  '2025-01-16 13:20:00',
  '2025-01-17 09:00:00'
),
(
  'Notifications badge count incorrect',
  'The unread notifications badge occasionally displays a higher count than actual unread messages. This discrepancy resolves after a full page refresh.',
  'OPEN',
  '2025-01-17 14:10:00',
  '2025-01-17 14:10:00'
),
(
  'Form validation messages unclear',
  'Several form validation error messages lack clarity and do not specify which fields require correction. This leads to user frustration during data entry.',
  'CLOSED',
  '2025-01-18 10:00:00',
  '2025-01-18 15:30:00'
),
(
  'Role-based access not enforced on reports',
  'Users without sufficient permissions can access restricted reports by navigating directly to their URLs. This indicates missing authorization checks on the backend.',
  'WIP',
  '2025-01-19 09:40:00',
  '2025-01-20 11:25:00'
),
(
  'Timezone mismatch in activity logs',
  'Activity log timestamps are displayed in server time instead of the user’s local timezone, leading to confusion when reviewing recent actions.',
  'OPEN',
  '2025-01-20 16:00:00',
  '2025-01-20 16:00:00'
),
(
  'Duplicate records created on retry',
  'Retrying failed requests can result in duplicate records being created due to lack of idempotency checks. This affects data accuracy and reporting.',
  'WIP',
  '2025-01-21 08:20:00',
  '2025-01-22 10:10:00'
),
(
  'Outdated help documentation',
  'Several help articles reference features that have been removed or renamed in recent releases, causing confusion for new users seeking guidance.',
  'CLOSED',
  '2025-01-22 14:30:00',
  '2025-01-23 09:50:00'
);