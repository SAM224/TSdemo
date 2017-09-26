export class LikeButton{ 
    constructor(private likesCount?: number, private isLiked?: boolean) {
        this.ShowResult();
    }
    Toggle(): void {
        this.likesCount += (this.isLiked)? -1 : +1;
        this.isLiked = ! this.isLiked;
        this.ShowResult();
    }

    ShowResult(){ 
        console.log('Total Number of likes:' + 
        this.likesCount + ' Button status: '+ 
        (this.isLiked?'liked': 'not liked'));
    }
}