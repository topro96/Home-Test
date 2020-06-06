import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import ContentCard from './ContentCard';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
    },
  }),
);

export default function ContentField() {

  const numPost = 7;
  const [posts, setPosts] = useState([]);
  const [paginationCount, setPaginationCount] = useState(0);
  const [page, setPage] = React.useState(1);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    queryPosts();
  };

  const queryPosts = () => {
    axios.get(process.env.API_URL + "/api/post/posts", {
      params: {
        page: (page - 1) * numPost,
        count: numPost,
      }
    })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    queryPosts();
  }, []);

  useEffect(() => {
    axios.get(process.env.API_URL + "/api/post/count")
      .then(response => {
        console.log("Total: " + response.data);
        setPaginationCount(parseInt(response.data) / numPost >> 0);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const getCards = () => {
    let cards: any[] = [];
    posts.forEach((element: any) => {
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
        page={page}
        onChange={handleChange}
        count={paginationCount} />
    </FormControl>
  );
}