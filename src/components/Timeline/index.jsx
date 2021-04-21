import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PageviewIcon from '@material-ui/icons/Pageview';

import './style.css';
import { Typography } from '@material-ui/core';

export default function CustomTimeline() {
  return (
    <Timeline className="timeline">
      <TimelineItem className="t_firstItem">
        <TimelineSeparator>
          <TimelineDot className="t_dot_header">
            <PageviewIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="t_header" />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="separator">
          <TimelineDot className="t_dot" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Tel. (53) 9 8459-9776</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="separator">
          <TimelineDot className="t_dot" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>github.com/silverjean</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="separator">
          <TimelineDot className="t_dot" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>silveirajeans@gmail.com</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className="separator">
          <TimelineDot className="t_dot" />
        </TimelineSeparator>
        <TimelineContent>LinkedIn: @silveirajean</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
