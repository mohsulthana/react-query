import React from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
    const pageSize = 10;
    const {
        error,
        data: posts,
        fetchNextPage,
        isFetchingNextPage,
    } = usePosts({ pageSize });

    if (error) return <p>{error.message}</p>;

    return (
        <>
            <ul className="list-group">
                {posts?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.map((post) => (
                            <li key={post.id} className="list-group-item">
                                {post.title}
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>
            <div className="d-flex gap-2 p-3">
                <button
                    onClick={() => fetchNextPage()}
                    className="btn btn-primary"
                    disabled={isFetchingNextPage}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </button>
            </div>
        </>
    );
};

export default PostList;
