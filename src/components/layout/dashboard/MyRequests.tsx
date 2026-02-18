"use client";
import { useState } from "react";
import { FeedbackModal } from "./my-requests/FeedbackModal";
import {
  APPROVED_REQUESTS,
  PAST_REQUESTS,
  PENDING_REQUESTS,
} from "./my-requests/mockData";
import { RequestCard } from "./my-requests/RequestCard";
import { RequestHeader } from "./my-requests/RequestHeader";
import { RequestTabs } from "./my-requests/RequestTabs";
import { RequestStatus } from "./my-requests/types";

export const MyRequests = () => {
  const [activeTab, setActiveTab] = useState<RequestStatus>("pending");
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<
    number | string | null
  >(null);

  const getRequestsByTab = () => {
    switch (activeTab) {
      case "pending":
        return PENDING_REQUESTS;
      case "approved":
        return APPROVED_REQUESTS;
      case "past":
        return PAST_REQUESTS;
      default:
        return [];
    }
  };

  const handleFeedbackClick = (id: number | string) => {
    setSelectedRequestId(id);
    setIsFeedbackOpen(true);
  };

  const currentRequests = getRequestsByTab();

  return (
    <section className="w-full space-y-8 animate-in fade-in duration-500">
      <RequestHeader />
      <RequestTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="space-y-6">
        <div className="bg-white rounded-md border border-gray-100 p-8 space-y-12 shadow-none min-h-[400px]">
          {currentRequests.length > 0 ? (
            currentRequests.map((request) => (
              <RequestCard
                key={request.id}
                data={request}
                onFeedbackClick={handleFeedbackClick}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-gray-400">
              <p className="font-bold">No requests found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        requestId={selectedRequestId}
      />
    </section>
  );
};
