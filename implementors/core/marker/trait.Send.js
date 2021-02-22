(function() {var implementors = {};
implementors["dualshock"] = [{"text":"impl Send for DS4Driver","synthetic":true,"types":[]},{"text":"impl Send for DS4","synthetic":true,"types":[]}];
implementors["dualshock_sys"] = [{"text":"impl&lt;Id&gt; Send for RawId&lt;Id&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for I16LE","synthetic":true,"types":[]},{"text":"impl Send for ConnectionType","synthetic":true,"types":[]},{"text":"impl Send for InputReport","synthetic":true,"types":[]},{"text":"impl Send for USBReport","synthetic":true,"types":[]},{"text":"impl Send for BTSimpleReport","synthetic":true,"types":[]},{"text":"impl Send for BTFullReport","synthetic":true,"types":[]},{"text":"impl Send for FullReport","synthetic":true,"types":[]},{"text":"impl Send for SimpleReport","synthetic":true,"types":[]},{"text":"impl Send for Type","synthetic":true,"types":[]},{"text":"impl Send for Trigger","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Buttons&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Dpad","synthetic":true,"types":[]},{"text":"impl Send for Gyro","synthetic":true,"types":[]},{"text":"impl Send for Accel","synthetic":true,"types":[]},{"text":"impl Send for Stick","synthetic":true,"types":[]},{"text":"impl Send for BTTrackpad","synthetic":true,"types":[]},{"text":"impl Send for USBTrackpad","synthetic":true,"types":[]},{"text":"impl Send for TrackpadPacket","synthetic":true,"types":[]},{"text":"impl Send for Finger","synthetic":true,"types":[]},{"text":"impl Send for FingerCoord","synthetic":true,"types":[]},{"text":"impl Send for InputReportId","synthetic":true,"types":[]}];
implementors["gyromouse"] = [{"text":"impl Send for ClickType","synthetic":true,"types":[]},{"text":"impl Send for GyroMouse","synthetic":true,"types":[]},{"text":"impl Send for CameraStick","synthetic":true,"types":[]},{"text":"impl Send for FlickStick","synthetic":true,"types":[]},{"text":"impl Send for ButtonStick","synthetic":true,"types":[]},{"text":"impl Send for FlickStickState","synthetic":true,"types":[]},{"text":"impl Send for Layer","synthetic":true,"types":[]},{"text":"impl Send for KeyState","synthetic":true,"types":[]},{"text":"impl Send for Buttons","synthetic":true,"types":[]},{"text":"impl Send for Action","synthetic":true,"types":[]},{"text":"impl Send for ExtAction","synthetic":true,"types":[]},{"text":"impl Send for KeyStatus","synthetic":true,"types":[]},{"text":"impl Send for VirtualKey","synthetic":true,"types":[]},{"text":"impl Send for MapKey","synthetic":true,"types":[]},{"text":"impl Send for Mouse","synthetic":true,"types":[]},{"text":"impl Send for JSMAction","synthetic":true,"types":[]},{"text":"impl Send for ActionModifier","synthetic":true,"types":[]},{"text":"impl Send for EventModifier","synthetic":true,"types":[]},{"text":"impl Send for ActionType","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for SpecialKey","synthetic":true,"types":[]},{"text":"impl Send for Cmd","synthetic":true,"types":[]}];
implementors["hid_gamepad"] = [{"text":"impl Send for GamepadError","synthetic":true,"types":[]}];
implementors["hid_gamepad_sys"] = [{"text":"impl Send for Report","synthetic":true,"types":[]},{"text":"impl Send for Motion","synthetic":true,"types":[]},{"text":"impl Send for JoyKey","synthetic":true,"types":[]},{"text":"impl Send for KeyStatus","synthetic":true,"types":[]}];
implementors["joy_infrared"] = [{"text":"impl Send for Mouse","synthetic":true,"types":[]},{"text":"impl Send for GUI","synthetic":true,"types":[]},{"text":"impl Send for UserEvent","synthetic":true,"types":[]},{"text":"impl Send for JoyconCmd","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for BoundBuffer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Camera","synthetic":true,"types":[]},{"text":"impl Send for CameraController","synthetic":true,"types":[]},{"text":"impl Send for Controls","synthetic":true,"types":[]},{"text":"impl Send for StyleSheet","synthetic":true,"types":[]},{"text":"impl Send for Sliderf32","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for Vertex2D","synthetic":true,"types":[]},{"text":"impl Send for D2","synthetic":true,"types":[]},{"text":"impl Send for D3","synthetic":true,"types":[]},{"text":"impl Send for IRCompute","synthetic":true,"types":[]},{"text":"impl Send for Texture","synthetic":true,"types":[]},{"text":"impl Send for Uniforms","synthetic":true,"types":[]},{"text":"impl Send for Lights","synthetic":true,"types":[]},{"text":"impl Send for Light","synthetic":true,"types":[]}];
implementors["joycon"] = [{"text":"impl Send for Image","synthetic":true,"types":[]},{"text":"impl Send for Calibration","synthetic":true,"types":[]},{"text":"impl Send for Report","synthetic":true,"types":[]},{"text":"impl Send for JoyCon","synthetic":true,"types":[]},{"text":"impl Send for IMU","synthetic":true,"types":[]},{"text":"impl Send for JoyconDriver","synthetic":true,"types":[]}];
implementors["joycon_sys"] = [{"text":"impl Send for AccessoryCommand","synthetic":true,"types":[]},{"text":"impl Send for AccessoryResponse","synthetic":true,"types":[]},{"text":"impl Send for OfflineSteps","synthetic":true,"types":[]},{"text":"impl Send for AccessoryCommandId","synthetic":true,"types":[]},{"text":"impl Send for AccessoryType","synthetic":true,"types":[]},{"text":"impl Send for RingconItemId","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for U16LE","synthetic":true,"types":[]},{"text":"impl Send for I16LE","synthetic":true,"types":[]},{"text":"impl Send for U32LE","synthetic":true,"types":[]},{"text":"impl&lt;Id&gt; Send for RawId&lt;Id&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for InputReportId","synthetic":true,"types":[]},{"text":"impl Send for SubcommandId","synthetic":true,"types":[]},{"text":"impl Send for Bool","synthetic":true,"types":[]},{"text":"impl Send for Frame","synthetic":true,"types":[]},{"text":"impl Send for Sensitivity","synthetic":true,"types":[]},{"text":"impl Send for IMUMode","synthetic":true,"types":[]},{"text":"impl Send for GyroSens","synthetic":true,"types":[]},{"text":"impl Send for AccSens","synthetic":true,"types":[]},{"text":"impl Send for GyroPerfRate","synthetic":true,"types":[]},{"text":"impl Send for AccAntiAliasing","synthetic":true,"types":[]},{"text":"impl Send for InputReport","synthetic":true,"types":[]},{"text":"impl Send for NormalInputReport","synthetic":true,"types":[]},{"text":"impl Send for StandardInputReport","synthetic":true,"types":[]},{"text":"impl Send for DeviceStatus","synthetic":true,"types":[]},{"text":"impl Send for ButtonsStatus","synthetic":true,"types":[]},{"text":"impl Send for RightButtons","synthetic":true,"types":[]},{"text":"impl Send for MiddleButtons","synthetic":true,"types":[]},{"text":"impl Send for LeftButtons","synthetic":true,"types":[]},{"text":"impl Send for Stick","synthetic":true,"types":[]},{"text":"impl Send for SubcommandReply","synthetic":true,"types":[]},{"text":"impl Send for Ack","synthetic":true,"types":[]},{"text":"impl Send for DeviceInfo","synthetic":true,"types":[]},{"text":"impl Send for FirmwareVersion","synthetic":true,"types":[]},{"text":"impl Send for MACAddress","synthetic":true,"types":[]},{"text":"impl Send for IMUMCU","synthetic":true,"types":[]},{"text":"impl Send for InputReportEnum","synthetic":true,"types":[]},{"text":"impl Send for DeviceType","synthetic":true,"types":[]},{"text":"impl Send for BatteryLevel","synthetic":true,"types":[]},{"text":"impl Send for Button","synthetic":true,"types":[]},{"text":"impl Send for WhichController","synthetic":true,"types":[]},{"text":"impl Send for UseSPIColors","synthetic":true,"types":[]},{"text":"impl Send for PlayerLights","synthetic":true,"types":[]},{"text":"impl Send for HomeLight","synthetic":true,"types":[]},{"text":"impl Send for PlayerLight","synthetic":true,"types":[]},{"text":"impl Send for MCUReport","synthetic":true,"types":[]},{"text":"impl Send for MCUStatus","synthetic":true,"types":[]},{"text":"impl Send for MCUCommand","synthetic":true,"types":[]},{"text":"impl Send for MCUCommandCRC","synthetic":true,"types":[]},{"text":"impl Send for MCURequest","synthetic":true,"types":[]},{"text":"impl Send for MCURequestCRC","synthetic":true,"types":[]},{"text":"impl Send for MCUReportId","synthetic":true,"types":[]},{"text":"impl Send for MCUCommandId","synthetic":true,"types":[]},{"text":"impl Send for MCUSubCommandId","synthetic":true,"types":[]},{"text":"impl Send for MCUMode","synthetic":true,"types":[]},{"text":"impl Send for MCURequestId","synthetic":true,"types":[]},{"text":"impl Send for MCURequestEnum","synthetic":true,"types":[]},{"text":"impl Send for Register","synthetic":true,"types":[]},{"text":"impl Send for Leds","synthetic":true,"types":[]},{"text":"impl Send for IRRequest","synthetic":true,"types":[]},{"text":"impl Send for IRAckRequestPacket","synthetic":true,"types":[]},{"text":"impl Send for IRReadRegisters","synthetic":true,"types":[]},{"text":"impl Send for MCUIRModeData","synthetic":true,"types":[]},{"text":"impl Send for IRStatus","synthetic":true,"types":[]},{"text":"impl Send for IRRegistersSlice","synthetic":true,"types":[]},{"text":"impl Send for IRData","synthetic":true,"types":[]},{"text":"impl Send for MCURegisters","synthetic":true,"types":[]},{"text":"impl Send for MCUSetReg","synthetic":true,"types":[]},{"text":"impl Send for Resolution","synthetic":true,"types":[]},{"text":"impl Send for ExposureMode","synthetic":true,"types":[]},{"text":"impl Send for ExternalLightFilter","synthetic":true,"types":[]},{"text":"impl Send for Flip","synthetic":true,"types":[]},{"text":"impl Send for IRRequestId","synthetic":true,"types":[]},{"text":"impl Send for IRRequestEnum","synthetic":true,"types":[]},{"text":"impl Send for MCUIRMode","synthetic":true,"types":[]},{"text":"impl Send for OutputReport","synthetic":true,"types":[]},{"text":"impl Send for Rumble","synthetic":true,"types":[]},{"text":"impl Send for SubcommandRequest","synthetic":true,"types":[]},{"text":"impl Send for RumbleData","synthetic":true,"types":[]},{"text":"impl Send for RumbleSide","synthetic":true,"types":[]},{"text":"impl Send for OutputReportId","synthetic":true,"types":[]},{"text":"impl Send for OutputReportEnum","synthetic":true,"types":[]},{"text":"impl Send for SubcommandRequestEnum","synthetic":true,"types":[]},{"text":"impl Send for SPIRange","synthetic":true,"types":[]},{"text":"impl Send for WrongRangeError","synthetic":true,"types":[]},{"text":"impl Send for SPIReadRequest","synthetic":true,"types":[]},{"text":"impl Send for SPIWriteRequest","synthetic":true,"types":[]},{"text":"impl Send for SPIReadResult","synthetic":true,"types":[]},{"text":"impl Send for SPIWriteResult","synthetic":true,"types":[]},{"text":"impl Send for SticksCalibration","synthetic":true,"types":[]},{"text":"impl Send for UserSticksCalibration","synthetic":true,"types":[]},{"text":"impl Send for LeftStickCalibration","synthetic":true,"types":[]},{"text":"impl Send for RightStickCalibration","synthetic":true,"types":[]},{"text":"impl Send for UserStickCalibration","synthetic":true,"types":[]},{"text":"impl Send for SensorCalibration","synthetic":true,"types":[]},{"text":"impl Send for UserSensorCalibration","synthetic":true,"types":[]},{"text":"impl Send for Color","synthetic":true,"types":[]},{"text":"impl Send for ControllerColor","synthetic":true,"types":[]}];
implementors["joytk"] = [{"text":"impl Send for Opts","synthetic":true,"types":[]},{"text":"impl Send for Calibrate","synthetic":true,"types":[]},{"text":"impl Send for Set","synthetic":true,"types":[]},{"text":"impl Send for SetColor","synthetic":true,"types":[]},{"text":"impl Send for Ringcon","synthetic":true,"types":[]},{"text":"impl Send for Relay","synthetic":true,"types":[]},{"text":"impl Send for SubCommand","synthetic":true,"types":[]},{"text":"impl Send for CalibrateE","synthetic":true,"types":[]},{"text":"impl Send for SetE","synthetic":true,"types":[]},{"text":"impl Send for RingconE","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()