import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  description: string;
}

const ExpandableText = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!description) return null;

  let limit = 300;

  let renderText =
    description.length <= limit
      ? description
      : !expanded
      ? description.slice(0, 300) + " ..."
      : description;

  let btn = !expanded ? "Read more" : "Show less";

  return (
    <>
      <span>{renderText}</span>
      {description.length >= limit && (
        <Button
          onClick={() => setExpanded(!expanded)}
          colorScheme="yellow"
          fontWeight="bold"
          marginLeft={1}
        >
          {btn}
        </Button>
      )}
    </>
  );
};

export default ExpandableText;
