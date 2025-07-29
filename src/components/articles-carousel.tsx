import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function articles() {
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4">
            <Card className="p-4 border-secondary bg-transparent gap-0 px-4 pb-0 h-full flex flex-col justify-between">
              <CardHeader className="h-20 md:h-36">
                <CardTitle>
                  <h3 className="font-tenor md:text-xl text-left text-accent-foreground">
                    ไม่ใช่แค่โค้ด แต่เปลี่ยนความคิด : Junior Software Developer
                    (Cohort 9) Bootcamp by Generation Thailand
                  </h3>
                </CardTitle>
                <CardDescription>
                  <p className="font-tenor text-left">
                    Bootcamp สายเทคที่ปลดล็อคสกิลใน 15 สัปดาห์
                  </p>
                </CardDescription>
                <Separator className="bg-secondary h-px" />
              </CardHeader>
              <CardFooter className="flex items-center h-10">
                <span className="font-nunito">2 min read</span>
                <Separator
                  orientation="vertical"
                  className="w-px md:w-0.5 h-6 bg-secondary mx-2"
                />
                <span className="font-nunito">ภาษาไทย on</span>
                <Button
                  variant="link"
                  className="font-tenor text-accent hover:text-accent-foreground py-0 px-2"
                  onClick={() =>
                    window.open(
                      "https://medium.com/@taemmyk/ไม่ใช่แค่โค้ด-แต่เปลี่ยนความคิด-junior-software-developer-cohort-9-bootcamp-by-generation-f34c0833b949",
                      "_blank"
                    )
                  }
                >
                  Medium
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>

          <CarouselItem className="pl-4">
            <Card className="p-4 border-secondary bg-transparent gap-0 px-4 pb-0 h-full flex flex-col justify-between">
              <CardHeader className="h-20 md:h-36">
                <CardTitle>
                  <h3 className="font-tenor md:text-xl text-left text-accent-foreground">
                    สู่ smart home ในฝัน
                  </h3>
                </CardTitle>
                <CardDescription>
                  <p className="font-tenor text-left">
                    จาก spin9arm – EP25: ของบางอย่าง สมาร์ทไปเพื่ออะไร
                  </p>
                </CardDescription>
                <Separator className="bg-secondary h-px" />
              </CardHeader>
              <CardFooter className="flex items-center h-10">
                <p className="font-nunito">
                  Scheduled to publish on mid August
                </p>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 z-10 border-0 hover:bg-transparent hover:text-accent-foreground" />
        <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 z-10 border-0 hover:bg-transparent hover:text-accent-foreground" />
      </Carousel>
    </div>
  );
}

export default articles;
