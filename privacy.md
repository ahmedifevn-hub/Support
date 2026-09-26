---
layout: doc
ref: privacy
title: Privacy Policy
description: "How UARC handles your data: what we collect and why, who processes it, what the AI sees, and how to delete everything."
effective: 1 August 2026
redirect_from: /privacy-policy.html
---

## 1. The short version

UARC is a fitness and nutrition app, published by **Ahmed Alaskar**. To
do its job it holds some genuinely personal information about you: your body
measurements, what you eat, what you lift, and what you say to the coach.

Three things worth knowing up front:

- **We don't sell your data, and we don't use it to train AI models.**
- **We don't track you.** There are no advertising or behavioural analytics
  trackers in this app at all. The one thing that reports back is a crash
  reporter, which fires only when the app breaks — see §2.
- **You can delete everything yourself**, from inside the app, in two taps —
  Settings → Delete account. See §7.

The rest of this document is the detail.

## 2. What we collect, and why

Everything below is tied to your account. We collect it because the app can't
function without it — not for advertising, and not for profiling.

| What | Examples | Why we need it |
|---|---|---|
| **Account details** | Email address; your name | To create and secure your account, and so the coach can address you by name |
| **Body measurements** | Height, weight, target weight, age, sex, weight-log history | To calculate your calorie and macro targets and show your progress |
| **Health context you choose to give** | Injuries, allergies, dietary style | So the app can avoid exercises that hurt you and foods you can't eat |
| **Food logs** | Meals, portions, calories, macros, saved custom foods, barcodes you scan | To show your daily totals and track patterns over time |
| **Meal photos** | Photos you take or attach for AI analysis | So the AI can identify the food and estimate its macros |
| **Workout data** | Training plan, exercises, sets, reps, weights, sessions, streaks | To run your programme and progress your weights |
| **Coach conversations** | The messages you send the coach, and its replies | To keep your chat history and give the coach context |
| **Voice input** | Speech while you're in a voice call with the coach | So you can talk to the coach instead of typing |
| **Subscription status** | Whether you have UARC Pro, and which plan | To unlock Pro features |
| **Usage counters** | How many coach messages you've sent this period | To enforce the message limits on each plan |
| **Crash diagnostics** | If the app crashes or hits an error: the error and where in the code it happened, your device model and OS version, the app version, and your account ID | To find and fix the crash. Nothing you logged is attached — see below |

**About crash diagnostics.** When something breaks, the app sends a technical
report so we can fix it. We have deliberately stripped that report down:

- It carries your **account ID** and nothing else about you — **never your
  email, never your name, never your password or login token.**
- **No screenshots and no screen contents.** A screenshot of this app is a
  picture of your body weight, so we turned that off.
- **No console trail.** Crash reporters normally attach a log of what the app
  printed just before the failure; that log can contain your figures, so we
  switched it off entirely rather than try to filter it.
- **Nothing you logged.** No meals, no weights, no photos, no coach messages.
- **Not when you're offline.** A failure caused by a dead connection is not
  sent at all.

**What we don't collect:** your location, your contacts, your payment card
details (Apple handles payment — we never see a card number), your browsing or
search history outside the app, and no advertising or behavioural analytics.

## 3. Who else processes your data

We use a small number of services to run UARC. Each gets only what it needs.

| Service | What it does | What it receives |
|---|---|---|
| **Supabase** | Our database, login system, and file storage. Everything in §2 lives here. | All of it |
| **Apple** | Sign in with Apple; App Store payment; speech-to-text on iOS | Your sign-in request; your purchase (Apple does not share your card details with us); and, when you talk to the coach, your speech audio — Apple's speech recognition converts it to text and returns the text to us. |
| **Google** | Google sign-in, if you choose it; speech-to-text on Android | Your sign-in request; and, when you talk to the coach on an Android device, your speech audio — Google's speech recognition converts it to text and returns the text to us. |
| **RevenueCat** | Manages subscription state and tells our server when to unlock Pro | Your account ID and purchase events. No health or food data. |
| **Anthropic (Claude)** | Powers the AI coach, the daily insight, food estimation, and meal-photo analysis | Your first name, plus the relevant fitness and nutrition figures, plus meal photos when you take one. This is Anthropic's commercial API — **your data is not used to train their models.** |
| **OpenAI** | Powers voice conversations with the coach only | Your speech audio during a voice call, and the coach's instructions. Audio goes from your device to OpenAI directly; we don't record or store it. Your login token is never sent to OpenAI. |
| **USDA FoodData Central** | Public nutrition database for food lookups | Only the food name you searched. No account information. |
| **Open Food Facts** | Public barcode database | Only the barcode you scanned. No account information. |
| **Sentry** | Collects crash and error reports so we can fix what breaks | The error and where in the code it happened, your device model and OS version, the app version, and your account ID. No health or food data, no screenshots, no email, no name. |

We don't share your data with anyone else, except where we're legally required
to, or where it's necessary to protect someone's safety.

## 4. What the AI actually sees

Because this is the part people reasonably want to know:

- **When you chat with the coach**, we send Anthropic your first name and a
  summary of your recent logged data — your targets, what you ate, what you
  lifted, your weight trend — so the answer is about *you* rather than generic.
  Your email address is never sent.
- **When you photograph a meal**, the photo is sent to Anthropic to identify the
  food. It's stored in our private storage so you can see it later on the log.
- **When you use voice**, your speech is turned into text by a speech-recognition
  service — Apple's on iOS, Google's on Android, or OpenAI's during a realtime
  voice call. The text is then answered by the coach exactly as if you had typed
  it. We don't keep a recording.
- **The coach is instructed not to give medical advice** and to refer you to a
  qualified professional if you ask about pain, injury, medication, or
  disordered eating.
- Everything the AI produces is an estimate. See the Terms of Service, §6.

## 5. Security

Your data sits behind row-level security in our database — the rules are written
so that each account can only ever read and write its own rows, enforced by the
database itself and not just by the app. Meal photos are in a private storage
bucket restricted to your own folder. Everything moves over HTTPS. Our AI
provider keys live only on the server and are never present in the app you
download.

No system is perfectly secure, and we're not going to claim otherwise.

## 6. How long we keep things

- **Your logs, workouts, weights, and chat history** are kept for as long as your
  account exists, because the app's whole purpose is showing you your history
  over time.
- **Meal photos** are kept until you delete the meal or your account. **We do not
  currently delete them automatically after a set period.** We intend to add an
  automatic expiry, and we'll update this policy when we do — we're not going to
  describe a deletion schedule we haven't built.
- **Voice audio** is never stored on our servers — we only ever keep the text it
  became. To turn speech into text, the audio goes to a speech-recognition
  service: Apple's on iOS, Google's on Android, or OpenAI's during a realtime
  voice call (see §3). How long those companies keep it is governed by their
  policies, not by this one.
- **Crash reports** are kept by Sentry on their standard retention, which is
  currently 90 days, and then deleted. They live with Sentry rather than in your
  account, so deleting your account does not reach back and remove a crash
  report already filed — but the only thing in it that points at you is your
  account ID, which by then belongs to no account.
- **When you delete your account, all of the above is deleted** (see §7). Some
  data may persist briefly in encrypted backups before those rotate out.

## 7. Your rights, and how to delete everything

**To delete your account and data:** open the app → **Settings → Delete
account** → confirm. This permanently removes your profile, food logs, meal
photos, workouts, weights, and coach conversations. It cannot be undone.

One important thing: **deleting your account does not cancel your Apple
subscription.** Cancel that separately in your device Settings → Apple ID →
Subscriptions, or you'll keep being charged.

You can also, at any time:

- **See and correct your data** — most of it is directly editable in the app
  (Settings → Profile, and any log entry);
- **Get a copy of your data** — email <uarcsupport@gmail.com> and we'll send it;
- **Object to how we use it, or withdraw consent** — email us; in practice, for
  this app, that mostly means deleting your account, since we don't use your
  data for anything except running the app for you.

If you're in the EU/UK and you think we've mishandled your data, you can
complain to your local data protection authority.

## 8. We do not track you

There is no advertising identifier, no cross-app or cross-site tracking, no
advertising network, and no behavioural or product analytics in this app. We
don't measure which screens you visit or how long you stay on them. We don't
build advertising profiles, and we don't share your data with data brokers.

The one third-party SDK that reports anything back to us is the crash reporter
described in §2 and §3. It sends a report when the app breaks, and at no other
time — it is not tracking, and it is not used for advertising.

## 9. Where your data is stored

Your data is stored by Supabase on Amazon Web Services infrastructure in
**ap-southeast-1 (Singapore)**.

Our AI providers (Anthropic, OpenAI), the crash reporter (Sentry), and the
public food databases process requests in other countries, including the United
States. So when you use the
coach or look up a food, that request is processed outside your country. We use
these providers under their standard commercial data-protection terms.

## 10. Children

UARC is for people aged **16 and over**. We don't knowingly collect data from
anyone under 16. If you believe a child has created an account, email us and
we'll delete it.

## 11. Changes, and how to reach us

If we change this policy in a way that matters, we'll update the effective date
and tell you in the app.

**Ahmed Alaskar**  
Dhahran, Saudi Arabia  
<uarcsupport@gmail.com>
