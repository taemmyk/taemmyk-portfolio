import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface ScribblyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkTo: string;
  children?: React.ReactNode;
}

const ScribblyCard: React.FC<ScribblyCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  linkTo,
  children,
}) => {
  return (
    <Link to={linkTo}>
      <Card className="border-chart-3 cursor-pointer">
        <CardHeader>
          <CardTitle className="font-atma text-xl text-accent-foreground">
            {title}
          </CardTitle>
          <CardDescription className="text-lg text-ring">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img src={imageSrc} alt={imageAlt} />
          {children && <div className="pt-4">{children}</div>}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ScribblyCard;
