import React, { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import ContentCard from './ContentCard';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { AppState } from '../store';
import { bindActionCreators } from 'redux';
import * as ContentAction from '../store/content-field/action';
import { connect, ConnectedProps } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
    },
  }),
);

function mapStateToProps(state: AppState) {
  return {
    state: state.contentField,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    { ...ContentAction },
    dispatch,
  )
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

function ContentField(props: Props) {

  const numPost = 7;

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.SetPage(value);
    props.GetPosts(((props.state.page - 1) * numPost), numPost);
  };


  useEffect(() => {
    props.GetPosts(((props.state.page - 1) * numPost), numPost);
  }, []);

  useEffect(() => {
    props.GetPaginationCount(numPost);
  }, []);


  const getCards = () => {
    let cards: any[] = [];
    props.state.posts.forEach((element: any) => {
      cards.push(<ContentCard
        author={element.author}
        comments={element.comments}
        date={element.date}
        link={element.link}
        name={element.name}
        points={element.points}

      ></ContentCard>);
    });
    return cards;
  }

  return (
    <FormControl className={classes.root}>
      {getCards()}
      <Pagination
        page={props.state.page}
        onChange={handleChange}
        count={props.state.paginationCount} />
    </FormControl>
  );
}

export default connector(ContentField);
