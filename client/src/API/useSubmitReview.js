// useSubmitReview.js
import { useState } from "react";
import Axios from "axios";
import { useToast } from "@/components/ui/use-toast";

const useSubmitReview = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
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

    Axios.post("http://localhost:8000/Post", { Name: name, Review: review })
      .then(() => {
        toast({
          title: "Success",
          description:
            "Your review has been submitted successfully. Thank you! (Hint: Refresh the site, to see your review.)",
          status: "success",
          variant: "default",
        });
        setName("");
        setReview("");
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

  return { name, setName, review, setReview, handleSubmit };
};

export default useSubmitReview;
