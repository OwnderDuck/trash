#pragma GCC optimize("Ofast")
#include <bits/stdc++.h>
#include <windows.h>
using namespace std;
HANDLE hhh;
int a[102][102],newa[102][102];
int x,y;
int n=100;
int fx[4]={0,1,0,-1};
int fy[4]={1,0,-1,0};
int cnt=1;
int sum=0;
int fpscnt=0,fps;
int lasttime=0;

void movee();
void smal();
void draw();
void swanp();


int main() {
	
	system("mode con cols=203 lines=104");//n*2+3,n+4
	ios::sync_with_stdio(0);
	cin.tie(0);cout.tie(0);
	HANDLE hhh=GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO cursor_info = {1, 0};SetConsoleCursorInfo(hhh, &cursor_info);
	
	srand(int(time(0)));
	//for(int i=n/4;i<=n/4*3;i++){a[n/2][i]=1;}//横线
	//for(int i=n/4;i<=n/4*3;i++){a[i][n/2]=1;}for(int i=n/4;i<=n/4*3;i++){a[n/2][i]=1;}//十字架
	a[n][n]=1;//a[n/2][n/2]=1;//单点
	//a[n/4][n/4]=1;a[n/4*3][n/4]=1;a[n/4][n/4*3]=1;a[n/4*3][n/4*3]=1;//四国
	lasttime=time(0);
	swanp();
	while(1){
		fpscnt++;
		if(time(0)-lasttime>=1){
			fps=fpscnt;
			fpscnt=0;
			lasttime=time(0);
		}
		movee();
		//draw();
		
		
	}
    return 0;
}

void movee(){
	if(a[x+1][y]||a[x][y+1]||a[x-1][y]||a[x][y-1]) {
		swanp();
		return ;
	}
	
	
	
	int lll=rand()%4;
	int xx=x+fx[lll],yy=y+fy[lll];
	if(1<=xx&&xx<=n&&1<=yy&&yy<=n){
		a[xx][yy]=a[x][y];
		a[x][y]=0;
		x=xx,y=yy;
	}
	return ;
}
void smal(){
	
	for(int i=1;i<=n;i+=2){
		for(int j=1;j<=n;j+=2){
			//newa[i/2+n/4+1][j/2+n/4+1]=(a[i][j]+a[i+1][j]+a[i+1][j]+a[i+1][j]>=1)||(a[i][j]+a[i+1][j]+a[i+1][j]+a[i+1][j]>=2&&rand()%2==1);
			newa[i/2+n/2+1][j/2+n/2+1]=(a[i][j]+a[i+1][j]+a[i+1][j]+a[i+1][j]>=1)||(a[i][j]+a[i+1][j]+a[i+1][j]+a[i+1][j]>=2&&rand()%2==1);
		}
	}
	sum=0;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			a[i][j]=newa[i][j];
			sum++;
		}
	}
	swanp();
}
void draw(){
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),{0,0});
			cout<<'+';for(int i=1;i<=n;i++){cout<<"--";}cout<<'+'<<endl;
			for(int i=1;i<=n;i++){
				cout<<'|';
				for(int j=1;j<=n;j++){
					if(a[i][j])cout<<"■"/*"##"*/;//cout<<setw(2)<<a[i][j];
					else cout<</*"·"*/"  ";
				}cout<<'|'<<endl;
			}cout<<'+';for(int i=1;i<=n;i++){cout<<"--";}cout<<'+'<<endl;
			cout<<"FPS:"<<fps<<"        "<<sum<<endl;		
}
void swanp(){
	draw();
	
	int lll=rand()%4;
	if(lll==0){x=rand()%n+1;y=1;}
	else if(lll==1){x=1;y=rand()%n+1;}
	else if(lll==2){x=rand()%n+1;y=n;}
	else if(lll==3){x=n;y=rand()%n+1;}
	
	/*
	x=rand()%n+1;y=rand()%n+1;
	*/
	x=1;y=1;
	if(a[x][y]!=0){
		smal();
		return ;
	}
	a[x][y]=1;
	sum++;
	return ;
}
