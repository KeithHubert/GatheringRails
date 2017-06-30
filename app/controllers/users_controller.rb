class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    if user_signed_in?
      @user = current_user
    # else
    #   flash[:notice] = 'Please sign in first'
    #   redirect_to new_user_session_path
    end

  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.email = params[:user][:email]
    # @user.avatar_url = params[:user][:avatar_url]
    @user.bio = params[:user][:bio]

    if @user.save
      flash[:notice] = 'Success! Your profile has been updated.'
      redirect_to @user
    else
      @user.email = params[:user][:email]
      # @user.avatar_url = params[:user][:avatar_url]
      @user.bio = params[:user][:bio]
      render :edit
    end
  end

  def destroy
    this_user = User.find(params[:id])
    this_user.destroy
    redirect_to root_path
  end
end
