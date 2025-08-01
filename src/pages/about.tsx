import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/tk-avatar.png";
import { Send, PhoneOutgoing, Linkedin, BicepsFlexed } from "lucide-react";
import { openExternalLink, emailMe, callMe } from "@/lib/utils-link";

function About() {
  return (
    <>
      <div className="h-full md:w-3/4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col mb-8 md:mb-16 ml-4 md:ml-0 self-start">
            <h2 className="font-tenor text-4xl ml-4 md:ml-12">About</h2>
            <Separator className="bg-secondary h-px w-1/2" />
          </div>
          <img
            src={avatar}
            alt="avatar"
            loading="lazy"
            className="max-w-64 max-h-64 md:max-w-96 md:max-h-96"
          />
          <p className="font-nunito italic text-sm text-center mx-4">
            ธนัชพร, but <span className="text-accent-foreground">Tammy</span>
            ’s been my go-to for so long, <br />
            even I do a double-take when someone calls me by the full one.
          </p>
        </div>
        <div className="w-full mt-8 md:mt-0 md:min-h-168 md:w-1/2 flex flex-col justify-around items-center">
          <table className="text-left font-nunito mx-6 md:mx-0">
            <colgroup>
              <col className="w-10 md:w-20" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td className="text-xs sm:text-sm md:text-lg">2013</td>
                <td className="text-xs sm:text-sm md:text-lg">
                  Native Thai moved to study in Brisbane
                </td>
              </tr>
              <tr>
                <td className="pt-3 md:py-2 text-xs sm:text-sm md:text-lg">
                  2018
                </td>
                <td className="pt-3 md:py-2 text-xs sm:text-sm md:text-lg">
                  Gained UX/UI designer internship experience
                </td>
              </tr>
              <tr>
                <td className="text-xs sm:text-sm md:text-lg">2019</td>
                <td className="text-xs sm:text-sm md:text-lg">
                  Graduated from
                  <Button
                    variant="link"
                    className="text-accent font-nunito py-0 px-1 text-xs sm:text-sm md:text-lg"
                    onClick={() =>
                      openExternalLink(
                        "https://www.qut.edu.au/courses/bachelor-of-creative-industries"
                      )
                    }
                  >
                    QUT
                  </Button>
                  , Interactive and Visual Design
                </td>
              </tr>
              <tr>
                <td className="text-xs sm:text-sm md:text-lg">2021</td>
                <td className="text-xs sm:text-sm md:text-lg">
                  Self-taught Unity and earned
                  <Button
                    variant="link"
                    className="text-accent font-nunito py-0 px-1 text-xs sm:text-sm md:text-lg"
                    onClick={() =>
                      openExternalLink("https://www.credly.com/users/taemmyk")
                    }
                  >
                    some certs
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-xs sm:text-sm md:text-lg">2022</td>
                <td className="text-xs sm:text-sm md:text-lg">
                  Started to experiment
                  <Button
                    variant="link"
                    className="text-accent font-nunito py-0 px-1 text-xs sm:text-sm md:text-lg"
                    onClick={() =>
                      openExternalLink("https://www.home-assistant.io/")
                    }
                  >
                    Home Assistant
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-xs sm:text-sm md:text-lg">2025</td>
                <td className="text-xs sm:text-sm md:text-lg">
                  Joined a{" "}
                  <Button
                    variant="link"
                    className="text-accent font-nunito py-0 px-1 text-xs sm:text-sm md:text-lg"
                    onClick={() =>
                      openExternalLink("https://www.facebook.com/GenerationTH")
                    }
                  >
                    Junior Software Developer Bootcamp
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="text-xs sm:text-sm md:text-lg">
                  <div className="flex items-center gap-2 text-xs sm:text-sm md:text-lg">
                    and am dedicated to continuous learning
                    <BicepsFlexed />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full mt-8 px-8 md:px-0 md:ml-48 font-tenor">
            <div className="flex justify-between">
              <Button
                variant="ghost"
                className="text-lg md:text-xl hover:bg-transparent"
                onClick={emailMe}
              >
                email
                <Send />
              </Button>
              <Button
                variant="ghost"
                className="font-nunito text-md md:text-lg text-muted-foreground hover:text-popover hover:bg-transparent mx-0 px-0"
                onClick={emailMe}
              >
                t.khamiam@gmail.com
              </Button>
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                className="text-lg md:text-xl hover:bg-transparent"
                onClick={callMe}
              >
                phone
                <PhoneOutgoing />
              </Button>
              <Button
                variant="ghost"
                className="font-nunito text-md md:text-lg text-muted-foreground hover:text-popover hover:bg-transparent mx-0 px-0"
                onClick={callMe}
              >
                +66 99 218 6997
              </Button>
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                className="text-lg md:text-xl hover:bg-transparent"
                onClick={() =>
                  openExternalLink("https://www.linkedin.com/in/t-khamiam/")
                }
              >
                linkedin
                <Linkedin />
              </Button>
              <Button
                variant="ghost"
                className="font-nunito text-md md:text-lg text-muted-foreground hover:text-popover hover:bg-transparent mx-0 px-0"
                onClick={() =>
                  openExternalLink("https://www.linkedin.com/in/t-khamiam/")
                }
              >
                @t-khamiam
              </Button>
            </div>
            <div className="flex justify-between">
              <span></span>
              <Button
                variant="secondary"
                className="font-nunito text-lg md:text-md text-muted-foreground hover:text-popover"
                onClick={() =>
                  openExternalLink("https://www.linkedin.com/in/t-khamiam/")
                }
              >
                resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
