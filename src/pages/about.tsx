import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/tk-avatar.png";
import { Send, PhoneOutgoing } from "lucide-react";
import { openExternalLink, emailMe, callMe } from "@/lib/utils-link";

function About() {
  return (
    <>
      <div className="flex min-h-28 mb-8">
        <Separator
          orientation="vertical"
          className="w-px md:w-0.5 bg-secondary mr-2 md:mr-4"
        />
        <h2 className="font-tenor text-4xl">About</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-28">
        <div className="md:w-1/2">
          <img
            src={avatar}
            alt="avatar"
            loading="lazy"
            className="max-w-64 max-h-64 md:max-w-96 md:max-h-96"
          />
          <p className="font-nunito italic text-sm">
            ธนัชพร, but <span className="text-accent-foreground">Tammy</span>’s
            been my go-to for so long, <br />
            even I do a double-take when someone calls me by the full one.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:min-h-168 md:w-1/2 flex flex-col justify-around">
          <div className="text-left font-nunito">
            <table>
              <tbody>
                <tr>
                  <td className="pr-10 text-sm md:text-md">2013</td>
                  <td className="text-sm md:text-lg">
                    Native Thai moved to study in Brisbane
                  </td>
                </tr>
                <tr>
                  <td className="py-3 md:py-2 text-sm md:text-md">2018</td>
                  <td className="py-3 md:py-2 text-sm md:text-lg">
                    Gained UX/UI designer internship experience
                  </td>
                </tr>
                <tr>
                  <td className="text-sm md:text-md">2019</td>
                  <td className="text-sm md:text-lg">
                    Graduated from
                    <Button
                      variant="link"
                      className="text-accent font-nunito py-0 px-1 text-sm md:text-lg"
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
                  <td className="text-sm md:text-md">2021</td>
                  <td className="text-sm md:text-lg">
                    Self-taught Unity and earned
                    <Button
                      variant="link"
                      className="text-accent font-nunito py-0 px-1 text-sm md:text-lg"
                      onClick={() =>
                        openExternalLink("https://www.credly.com/users/taemmyk")
                      }
                    >
                      some certs
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-sm md:text-md">2022</td>
                  <td className="text-sm md:text-lg">
                    Started to experiment
                    <Button
                      variant="link"
                      className="text-accent font-nunito py-0 px-1 text-sm md:text-lg"
                      onClick={() =>
                        openExternalLink("https://www.home-assistant.io/")
                      }
                    >
                      Home Assistant
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-sm md:text-md">2025</td>
                  <td className="text-sm md:text-lg">
                    Joined a{" "}
                    <Button
                      variant="link"
                      className="text-accent font-nunito py-0 px-1 text-sm md:text-lg"
                      onClick={() =>
                        openExternalLink(
                          "https://www.facebook.com/GenerationTH"
                        )
                      }
                    >
                      Junior Software Developer Bootcamp
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 ml-8 md:ml-24 font-tenor">
            <div className="flex justify-between">
              <Button
                variant="ghost"
                className="text-xl hover:bg-transparent"
                onClick={emailMe}
              >
                email
                <Send />
              </Button>
              <span className="text-lg md:text-md text-muted-foreground">
                t.khamiam@gmail.com
              </span>
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                className="text-xl hover:bg-transparent"
                onClick={callMe}
              >
                phone
                <PhoneOutgoing />
              </Button>
              <span className="font-nunito text-lg md:text-md text-muted-foreground">
                +66 99 218 6997
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
