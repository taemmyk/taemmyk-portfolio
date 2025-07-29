export const openExternalLink = (url: string) => {
  try {
    const validUrl = new URL(url);
    window.open(validUrl.href, "_blank");
  } catch (error) {
    console.error("Invalid URL:", url, error);
  }
};

export const emailMe = () => {
  const emailAddress = "t.khamiam@gmail.com";
  const subject = encodeURIComponent("Hello");
  window.location.href = `mailto:${emailAddress}?subject=${subject}`;
};

export const callMe = () => {
  window.location.href = "tel:+66992186997";
};
