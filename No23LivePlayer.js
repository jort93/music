/*
#################################################################################
#										#
#	Generated by N�23Live for more information visit our website.		#
#	Copyright (c) 2003 - 2006 Ivan Bischof					#
#	ALL RIGHTS RESERVED							#
#	Home 	: http://www.no23.de/						#
#	Support : ivan.bischof@no23.de						#
#										#
#################################################################################
*/

function showTheSmallPlayer() {
	document.write ('<div id="no23live">\n');
	document.write ('<OBJECT ID="WMPlayer" CLASSID="CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95" ');
	document.write ('CODEBASE= "http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715" ');
	document.write ('width="192" height="50">\n');
	document.write ('<PARAM NAME="FileName" VALUE="playlist.asx" />');
	document.write ('<PARAM NAME="TransparentAtStart" Value="true" />');
	document.write ('<PARAM NAME="AutoStart" Value="True" />');
	document.write ('<PARAM NAME="AnimationatStart" Value="false" />');
	document.write ('<param name="ShowControls" Value="true" />');
	document.write ('<PARAM NAME="ShowStatusBar" Value="true" />');
	document.write ('<PARAM NAME="autoSize" Value="false" />');
	document.write ('<PARAM NAME="displaySize" Value="false">');
	document.write ('<PARAM NAME="ShowAudioControls" Value="true" />');
	document.write ('<PARAM NAME="ShowPositionControls" Value="false" />');
	document.write ('<PARAM NAME="AutoRewind" Value="true" />');
	document.write ('      <embed type="application/x-mplayer2"');
	document.write ('           pluginspage="http://www.microsoft.com/windows/mediaplayer/download/default.asp"');
	document.write ('           name="MediaPlayer"');
	document.write ('           width="192"');
	document.write ('           height="50"');
	document.write ('           src="playlist.asx"');
	document.write ('           allowchangedisplaysize="0"');
	document.write ('           animationatstart="0"');
	document.write ('           autorewind="1"');
	document.write ('           autosize="0"');
	document.write ('           autostart="1"');
	document.write ('           balance="0"');
	document.write ('           baseurl=""');
	document.write ('           clicktoplay="0"');
	document.write ('           enablecontextmenu="0"');
	document.write ('           enablefullscreencontrols="0"');
	document.write ('           enablepositioncontrols="1"');
	document.write ('           enabletracker="0"');
	document.write ('           invokeurls="0"');
	document.write ('           mute="0"');
	document.write ('           selectionend="-1"');
	document.write ('           selectionstart="0"');
	document.write ('           showaudiocontrols="1"');
	document.write ('           showcaptioning="0"');
	document.write ('           showcontrols="1"');
	document.write ('           showdisplay="0"');
	document.write ('           showgotobar="0"');
	document.write ('           showpositioncontrols="0"');
	document.write ('           showstatusbar="1"');
	document.write ('           showtracker="0"');
	document.write ('           transparentatstart="1"');
	document.write ('           volume="0">');
	document.write ('      </embed>');
	document.write ('</OBJECT>\n');
  	document.write ('</div>');

}
// CALL the function
showTheSmallPlayer();
