import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const useSubmitContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const sendEmailUrl = import.meta.env.VITE_SEND_EMAIL;

  const handleSubmit = async ({ fullName, email, topic, message }) => {
    setIsLoading(true);
    const formData = { fullName, email, topic, message };
    try {
      const response = await fetch(sendEmailUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send email");

      toast({
        title: "Success",
        description: "Your mail has been sent successfully. Thank you!",
        status: "success",
        variant: "default",
      });
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "There was an error sending your mail. Try Again Later",
        status: "error",
        variant: "destructive",
      });
      setIsLoading(false);
      return false;
    }
  };

  return { handleSubmit, isLoading };
};

export default useSubmitContactForm;
