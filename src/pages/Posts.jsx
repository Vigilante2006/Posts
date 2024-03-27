import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

export default function Posts() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products/';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setResult(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
            {result.map((item, index) => (
                <Grid item xs={3} sm={4} md={3} key={index} data={item}>
                    <Card sx={{ maxWidth: 250, maxHeight: 300, padding: 2 }}>
                        <CardMedia
                            component="img"
                            height="180px"
                            image={item.image}
                            alt={item.title}
                            style={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Link href="#" color="inherit" variant="body2" underline="none" style={{ display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 1, textOverflow: 'ellipsis', WebkitBoxOrient: 'vertical' }}>
                                {item.title}
                            </Link>
                        </CardContent>
                        <CardActions >
                            <div>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </div>

                            <Button variant="contained" color="success">
                                Add to
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
