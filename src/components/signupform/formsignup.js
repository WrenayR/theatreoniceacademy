import { Skeleton } from "@mui/material";

function SignUpForm() {
  return (
    <div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScKE5GOeod7TPSV3g6qvz_J7o8Xe1K12-O4tPPruOsEfbN26w/viewform?usp=dialog"
        width="40%"
        height="900px"
      >
        (
          <Skeleton variant="text"></Skeleton>
        )
      </iframe>
    </div>
  );
}

export default SignUpForm;