/**************************************************************************************************
 *
 * ADOBE SYSTEMS INCORPORATED
 * Copyright 2015 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
 * terms of the Adobe license agreement accompanying it.  If you have received this file from a
 * source other than Adobe, then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 *
 **************************************************************************************************/

function getMessageFromCore() {
  return "This is the message from getMessageFromCore";
}

var objCore = {};
objCore.getMessage = function () {
  return "message from objCore.getMessage";
};

function importFile(filePath) {
  app.project.importFiles(
    [filePath],
    false, // suppress warnings
    app.project.getInsertionBin(),
    false
  ); // import as numbered stills
}

function insertToSequence() {
  var start = 15;
  var seq = app.project.activeSequence;
  $._PPP_.updateEventPanel("Seq is: ", seq.videoTracks.numTracks);

  if (seq) {
    var first = app.project.rootItem.children[0];
    $._PPP_.updateEventPanel("First is: ", first.name);

    if (first) {
      if (!first.isSequence()) {
        if (first.type !== ProjectItemType.BIN) {
          var numVTracks = seq.videoTracks.numTracks;
          var targetVTrack = seq.videoTracks[numVTracks - 1];
          if (targetVTrack) {
            // If there are already clips in this track, append this one to the end. Otherwise, insert at start time.
            if (targetVTrack.clips.numItems > 0) {
              var lastClip =
                targetVTrack.clips[targetVTrack.clips.numItems - 1];
              if (lastClip) {
                targetVTrack.insertClip(first, [start]);
              }
            } else {
              var timeAtZero = new Time();
              targetVTrack.insertClip(first, [start]);
              // Using linkSelection/unlinkSelection calls, panels can remove just the audio (or video) of a given clip.
              var newlyAddedClip =
                targetVTrack.clips[targetVTrack.clips.numItems - 1];
              if (newlyAddedClip) {
                newlyAddedClip.setSelected(true, true);
                seq.unlinkSelection();
                newlyAddedClip.remove(true, true);
                seq.linkSelection();
              } else {
                $._PPP_.updateEventPanel("Could not add clip.");
              }
            }
          } else {
            $._PPP_.updateEventPanel("Could not find first video track.");
          }
        } else {
          $._PPP_.updateEventPanel(first.name + " is a bin.");
        }
      } else {
        $._PPP_.updateEventPanel(first.name + " is a sequence.");
      }
    } else {
      $._PPP_.updateEventPanel("Couldn't locate first projectItem.");
    }
  } else {
    $._PPP_.updateEventPanel("no active sequence.");
  }
}

function insertOrAppendToTopTracks(filePath, start, end) {
  //   return new Promise((resolve, reject) => {
  var seq = app.project.activeSequence;
  if (seq) {
    var length = app.project.rootItem.children.length;
    var last = app.project.rootItem.children[length - 1];
    var first = app.project.rootItem.children[0];
    if (last) {
      var newClip = seq.insertClip(
        last,
        parseFloat(start),
        seq.videoTracks.numTracks - 1,
        seq.audioTracks.numTracks - 1
      );
      if (newClip) {
        $._PPP_.updateEventPanel(
          "Inserted " + newClip.name + ", into " + seq.name + "."
        );
      }
    } else {
      $._PPP_.updateEventPanel("Couldn't locate first projectItem.");
    }
  } else {
    $._PPP_.updateEventPanel("no active sequence.");
  }
}

function insertSubtitle(filePath, start, end) {
  var seq = app.project.activeSequence;
  if (seq) {
    var length = app.project.rootItem.children.length;
    var last = app.project.rootItem.children[length - 1];
    var first = app.project.rootItem.children[0];
    if (last) {
      var newClip = seq.createCaptionTrack(last, 0);
      if (newClip) {
        $._PPP_.updateEventPanel(
          "Inserted " + newClip.name + ", into " + seq.name + "."
        );
      }
    } else {
      $._PPP_.updateEventPanel("Couldn't locate first projectItem.");
    }
  } else {
    $._PPP_.updateEventPanel("no active sequence.");
  }
}
