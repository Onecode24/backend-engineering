## Example

### Description
Here we are going to take an example on a `AudioPlayer`, `VideoPlayer` and `MediaPlayer` interface.

### Bad point of view
In the bad ISP example, we have a `MediaPlayer` interface that has methods for both audio and video. This is a violation of the ISP because the `AudioPlayer` and `VideoPlayer` classes are forced to implement methods that they don't need.

### Good point of view
In the good ISP example, we have a `AudioPlayer` interface and a `VideoPlayer` interface. This is a better design because the `AudioPlayer` and `VideoPlayer` classes are only forced to implement the methods that they need.

Then We can see a use cases example 