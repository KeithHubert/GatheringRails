class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    # @reviews = @user.reviews.order(created_at: :desc)
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.email = params[:user][:email]
    @user.avatar_url = params[:user][:avatar_url]

    if @user.save
      flash[:notice] = 'Success! Your profile has been updated.'
      redirect_to @user
    else
      @user.email = params[:user][:email]
      @user.avatar_url = params[:user][:avatar_url]
      render :edit
    end
  end

  def destroy
    this_user = User.find(params[:id])
    this_user.destroy

    redirect_to users_path
  end

end
