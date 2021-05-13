import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

export default function CustomTimeline() {
  const classes = useStyles();

  return (
    <Timeline className={classes.timeline}>
      <TimelineItem className={classes.t_firstItem}>
        <TimelineSeparator>
          <TimelineDot className={classes.t_dot_header}>
            <PageviewIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={classes.t_header} />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className={classes.separator}>
          <TimelineDot className={classes.t_dot} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Tel. (53) 9 8459-9776</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className={classes.separator}>
          <TimelineDot className={classes.t_dot} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>github.com/silverjean</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className={classes.separator}>
          <TimelineDot className={classes.t_dot} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>silveirajeans@gmail.com</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator className={classes.separator}>
          <TimelineDot className={classes.t_dot} />
        </TimelineSeparator>
        <TimelineContent>LinkedIn: @silveirajean</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
