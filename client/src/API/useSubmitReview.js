// useSubmitReview.js
import { useState } from "react";
import Axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const useSubmitReview = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [review, setReview] = useState("");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const submitTestimonialUrl = import.meta.env.VITE_SUBMIT_TESTIMONIAL;

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!name.trim() || !review.trim()) {
      toast({
        title: "Error",
        description: "Please ensure both your name and review are filled out.",
        status: "error",
        variant: "destructive",
      });
      return;
    }

    Axios.post(submitTestimonialUrl, {
      Name: name,
      Position: position,
      Review: review,
    })
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Success",
          description:
            "Your review has been submitted successfully. Thank you! (Hint: Refresh the site, to see your review.)",
          status: "success",
          variant: "default",
        });
        setName("");
        setReview("");
        setPosition("");
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to submit the review.",
          status: "error",
          variant: "destructive",
        });
      });
  };

  return {
    name,
    setName,
    position,
    setPosition,
    review,
    setReview,
    handleSubmit,
    isLoading,
  };
};

export default useSubmitReview;
