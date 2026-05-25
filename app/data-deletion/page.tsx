import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description: "Instructions for requesting deletion of personal data from Becko.",
};

const sections = [
  {
    title: "How to Request Data Deletion",
    body: (
      <>
        <p>
          If you would like to request the deletion of your personal data from Becko,
          including any data collected through Facebook Lead Ads, Facebook Messenger,
          Instagram Direct Messages, WhatsApp, or AI agent interactions, please follow
          the steps below.
        </p>
        <h3 className="text-lg text-ink">Steps</h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Send an email to{" "}
            <a className="text-brand-light hover:text-white" href="mailto:privacy@becko.app">
              privacy@becko.app
            </a>{" "}
            with the subject line "Data Deletion Request".
          </li>
          <li>
            In the body of the email, include your full name and the email address or
            phone number associated with your account, lead submission, or messaging
            conversation.
          </li>
          <li>Our team will verify your identity and process your request within 30 days.</li>
          <li>You will receive a confirmation email once your data has been deleted.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Messenger Opt-Out",
    body: (
      <>
        <p>
          If you want to stop receiving automated messages from our Messenger,
          Instagram, or WhatsApp channels, you can send any of the following keywords
          in the conversation:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>STOP</li>
          <li>UNSUBSCRIBE</li>
          <li>OPT OUT</li>
        </ul>
        <p>
          This will immediately halt all automated messages. Note that opting out of
          messaging does not automatically delete your data - please submit a separate
          deletion request as described above.
        </p>
      </>
    ),
  },
  {
    title: "What Data Will Be Deleted",
    body: (
      <>
        <p>Upon a valid deletion request, we will remove:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your personal contact information (name, email, phone number)</li>
          <li>Any lead data collected via Facebook Lead Ads</li>
          <li>Facebook Messenger conversation history and associated messages</li>
          <li>Instagram Direct Message conversation history</li>
          <li>WhatsApp conversation history and associated messages</li>
          <li>AI agent interaction logs and memory items</li>
          <li>Notification opt-in tokens (OTN and recurring)</li>
          <li>Broadcast subscription records</li>
          <li>Associated booking inquiries and communication history</li>
          <li>Flight and hotel search data processed on your behalf</li>
        </ul>
        <p>
          Note: Some data may be retained if required by law (e.g., financial records
          for tax purposes, or data required to resolve disputes). In such cases, we
          will inform you of the specific data retained and the legal basis for
          retention.
        </p>
      </>
    ),
  },
  {
    title: "Facebook Data",
    body: (
      <p>
        If you submitted your information through a Facebook Lead Ad form or
        interacted via Messenger, you can also manage your data directly through your
        Facebook Settings. Deleting your data from Facebook does not automatically
        delete it from our systems - please submit a separate request to us as
        described above.
      </p>
    ),
  },
  {
    title: "WhatsApp Data Retention",
    body: (
      <>
        <p>
          WhatsApp messages stored on Meta&apos;s servers are automatically deleted
          according to your account&apos;s storage configuration:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Standard mode: Messages are deleted after 30 days. Media attachments are available for 7 days.</li>
          <li>No Storage mode: Messages are deleted after 1 hour. Media attachments are available for 1 hour.</li>
        </ul>
        <p>
          Some WhatsApp data may already have been automatically deleted from Meta&apos;s
          servers by the time your deletion request is processed. Data stored in
          Becko&apos;s own database will be deleted upon a valid request regardless of
          Meta&apos;s retention status.
        </p>
      </>
    ),
  },
  {
    title: "Processing Time",
    body: (
      <p>
        We aim to process all data deletion requests within 30 days of receiving a
        verified request. Complex requests may take up to 60 days, in which case we
        will notify you of the delay and the reason.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        For any questions about data deletion, contact us at{" "}
        <a className="text-brand-light hover:text-white" href="mailto:privacy@becko.app">
          privacy@becko.app
          </a>{" "}
        .
      </p>
    ),
  },
];

export default function DataDeletionPage() {
  return (
    <LegalPage
      eyebrow="Data Deletion"
      title="Data Deletion Instructions"
      description="Last updated: April 8, 2026"
      sections={sections}
    />
  );
}
