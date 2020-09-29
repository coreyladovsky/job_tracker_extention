# Job Tracker Chrome Extension

This extension is currently compatible with [Pursuit Job Tracker](https://helper-queue.netlify.app/) (which can only be used if you're a Pursuit fellow), or with [Ultimate Job Tracker](https://ultimate-job-tracker.netlify.app/) for people outside of Pursuit that need to keep track of their job applications.

The point of this extension is to increase the efficiency of copying over pertinent job information from popular job boards.

### Which job boards does it work for?

As of now it works for:
  * LinkedIn
  * Indeed
  * Greenhouse
  * Lever

There are still some instances when it may not work for one of the sites listed. I apologize ahead of time for those. If you find one, let me know by creating a new issue, and I'll try to improve the extension to make it more flexible.

### Best pracites

It is recommended to keep a tab of your job tracker open, and look for jobs on an adjacent tab. After applying to a job, it is time to copy down all the important details so that you can remember which job your applied to.

Click on the job_tracker extension and a pop up should appear. While on the job page, select `Click to Copy`.

Then navigate to the tracker. Click on the `Add Job` button. After the modal appears, click on the job_tracker extension and then click on `Paste Posting`.

Hopefully the Job Title, Company, Location, URL, and Description will be auto filled.

### Install Instructions

This app is also availabe from the chrome web store [here](https://chrome.google.com/webstore/detail/jobtracker/bielmjcfdikdfnakkfiljafaapnblkjc)

To install locally

1. Clone this repository on your local machine.
2. On your Chrome brower go to `chrome://extensions/`
3. Make sure you have `Developer mode` toggled on in the upper right hand corner.
4. Click on `Load unpacked`.
5. Select the originally cloned folder.
6. Make sure you see in your list, and that the toggle in the lower right of the extension card is turned on.

If you wish to pin the extension click on the puzzle piece next to your current extensions and toggle the pin next to job_tracker to be blue.

That's it!

### How to make sure your extension is up to date

Because the app is not currently in the chrome store, you'll have to manually make updates to the extension if you wish to stay up to date with current improvements. To do so:

1. In Terminal, navigate to your cloned directory of the project.
2. Run the command `git pull`.
3. On your Chrome brower go to `chrome://extensions/`
4. Find the extension called job_tracker and click on the refresh button next to the on off toggle.

Good luck on your job hunt! Please star this repo if you've found it helpful, and watch it so that you can know when to update your extension.
