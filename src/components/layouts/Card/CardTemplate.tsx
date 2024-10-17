import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card> & {
  link?: string;
  buttonText?: string;
  ButtonComponent?: React.ComponentType<React.ComponentProps<typeof Button>>;
};

export default function CardTemplate({ className, ...props }: CardProps) {
  return (
    <Card className={cn("border border-white", className)} {...props}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{props.content}</p>
      </CardContent>
      <CardFooter>
        {props.ButtonComponent ? <props.ButtonComponent></props.ButtonComponent> : <></>}
        {props.link ? (
          <Button>
            <Link href={props.link}>{props.buttonText}</Link>
          </Button>
        ) : (
          <></>
        )}
      </CardFooter>
    </Card>
  );
}