class UsersController < ApplicationController
  before_action :authenticate_user!


  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.email = params[:user][:email]
    @user.avatar_url = params[:user][:avatar_url]
    @user.bio = params[:user][:bio]

    if @user.save
      flash[:notice] = 'Success! Your profile has been updated.'
      redirect_to @user
    else
      @user.email = params[:user][:email]
      @user.avatar_url = params[:user][:avatar_url]
      @user.bio = params[:user][:bio]
      render :edit
    end
  end

  def destroy
    this_user = User.find(params[:id])
    this_user.destroy

    redirect_to users_path
  end
end
