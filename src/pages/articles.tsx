import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function articles() {
  return (
    <div>
      <div className="flex min-h-28 mb-8">
        <Separator
          orientation="vertical"
          className="w-px md:w-0.5 bg-secondary mr-2 md:mr-4"
        />
        <h2 className="font-tenor text-4xl">Articles</h2>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-8 md:m-4">
        <Card className="p-4 border-secondary bg-transparent gap-0 px-0 pb-0">
          <CardHeader className="h-20 md:h-36">
            <CardTitle>
              <h3 className="font-noto md:text-xl text-left text-accent-foreground">
                ไม่ใช่แค่โค้ด แต่เปลี่ยนความคิด
                <span className="font-tenor">
                  : Junior Software Developer (Cohort 9) Bootcamp by Generation
                  Thailand
                </span>
              </h3>
            </CardTitle>
            <CardDescription>
              <p className="font-tenor text-left">
                Bootcamp{" "}
                <span className="font-noto">
                  สายเทคที่ปลดล็อคสกิลใน 15 สัปดาห์
                </span>
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
            <span className="font-nunito">
              <span className="font-noto">ภาษาไทย</span> on
            </span>
            <Button
              variant="link"
              className="font-tenor text-foreground hover:text-accent-foreground py-0 px-2"
            >
              Medium
            </Button>
          </CardFooter>
        </Card>
        <Card className="p-4 border-secondary bg-transparent gap-0 px-0">
          <CardHeader className="h-20 md:h-36">
            <CardTitle>
              <h3 className="font-noto md:text-xl text-left text-accent-foreground">
                สู่ <span className="font-tenor">smart home {" "}</span>
                ในฝัน
              </h3>
            </CardTitle>
            <CardDescription>
              <p className="font-tenor text-left">
                จาก spin9arm – EP25: ของบางอย่าง สมาร์ทไปเพื่ออะไร
                <span className="font-noto"></span>
              </p>
            </CardDescription>
            <Separator className="bg-secondary h-px" />
          </CardHeader>
          <CardFooter className="flex items-center h-10">
            <p className="font-nunito">scheduled to publish on mid August</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default articles;
