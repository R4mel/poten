// Toss Payments Widget Loader
export function loadTossPaymentsWidget(clientKey: string) {
  if (typeof window === "undefined") return;
  if (document.getElementById("toss-widget-script")) return;
  const script = document.createElement("script");
  script.src = "https://js.tosspayments.com/v1/payment";
  script.id = "toss-widget-script";
  script.async = true;
  document.body.appendChild(script);
}
